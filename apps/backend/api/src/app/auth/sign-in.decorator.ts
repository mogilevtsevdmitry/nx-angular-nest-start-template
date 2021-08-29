import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const SignIn = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const args = ctx.getArgs()[1]
  return { email: args.email, password: args.password }
})
