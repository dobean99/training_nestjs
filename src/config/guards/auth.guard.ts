import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    // Implement your authentication logic here
    if (req.headers.authorization !== 'Bearer secret123') {
      throw new UnauthorizedException('Invalid or missing token');
    }
    return true;
  }
}
