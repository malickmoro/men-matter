import type { HttpContext } from '@adonisjs/core/http'
import Message from '#app/Models/Message'
import { randomUUID } from 'node:crypto'

export default class MessagesController {
  private assignUserId(ctx: HttpContext) {
    const userId = randomUUID()
    ctx.response.cookie('wall_of_voices_user', userId, {
      httpOnly: false,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 365,
    })
    return userId
  }

  private getUserId(ctx: HttpContext, createIfMissing = false) {
    let userId = ctx.request.cookie('wall_of_voices_user')

    if (!userId && createIfMissing) {
      userId = this.assignUserId(ctx)
    }

    return userId
  }

  public async index(ctx: HttpContext) {
    const userId = this.getUserId(ctx)
    return ctx.view.render('home', { userId })
  }

  public async begin(ctx: HttpContext) {
    const userId = this.getUserId(ctx)

    if (!userId) {
      this.assignUserId(ctx)
    }

    return ctx.response.redirect().toRoute('home')
  }

  public async storePraise(ctx: HttpContext) {
    const userId = this.getUserId(ctx, true)
    const content = ctx.request.input('content')?.trim()

    if (!userId || !content) {
      return ctx.response.redirect().back()
    }

    await Message.create({
      userId,
      type: 'praise',
      content,
    })

    return ctx.response.redirect().toRoute('history')
  }

  public async storeIssue(ctx: HttpContext) {
    const userId = this.getUserId(ctx, true)
    const content = ctx.request.input('content')?.trim()

    if (!userId || !content) {
      return ctx.response.redirect().back()
    }

    await Message.create({
      userId,
      type: 'issue',
      content,
    })

    return ctx.response.redirect().toRoute('history')
  }

  public async history(ctx: HttpContext) {
    const userId = this.getUserId(ctx)

    if (!userId) {
      return ctx.response.redirect().toRoute('home')
    }

    const [praise, issues] = await Promise.all([
      Message.query().where('type', 'praise').orderBy('created_at', 'desc'),
      Message.query().where('type', 'issue').orderBy('created_at', 'desc'),
    ])

    return ctx.view.render('history', {
      praise,
      issues,
    })
  }
}
