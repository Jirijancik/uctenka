import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

export const GetUser = createParamDecorator(
  async (_: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    const authHeader = request.headers.authorization;
    const bearerToken = authHeader?.split(' ')[1]; // Extract the token part

    if (!bearerToken) return null;

    const jwtService = new JwtService({ secret: process.env.JWT_SECRET });

    try {
      const user = await jwtService.verifyAsync(bearerToken); // Verify the token

      return user.id;
    } catch (error) {
      console.error('Token verification error:', error);
      return null;
    }
  },
);
