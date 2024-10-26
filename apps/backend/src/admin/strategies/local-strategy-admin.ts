import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AdminService } from "../admin.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class AdminLocalStrategy extends PassportStrategy(Strategy){
    constructor(private adminService: AdminService){
        super();
    }

    async validate(username: string, password: string) {
        const user = await this.adminService.signIn({username: username, password: password});

        if(!user)
            throw new UnauthorizedException('Invalid Credentials');
        return user
    }
}