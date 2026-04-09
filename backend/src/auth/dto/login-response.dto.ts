import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../../users/enums/role.enum';

class LoggedInUserDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  fullName: string;

  @ApiProperty({ enum: Role, enumName: 'Role' })
  role: Role;
}

export class LoginResponseDto {
  @ApiProperty()
  accessToken: string;

  @ApiProperty({ type: LoggedInUserDto })
  user: LoggedInUserDto;
}
