import { AuthGuard } from '@nestjs/passport'
import { Injectable } from '@angular/core'
import { ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

@Injectable()
export class GqlAuthGuard extends AuthGuard('jwt') {
  getRequest(ctx: ExecutionContext) {
    const context = GqlExecutionContext.create(ctx)
    return context.getContext().req
  }
}
