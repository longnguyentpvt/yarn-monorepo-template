/* eslint-disable import/no-cycle */
import { UserRole } from "@sy/shared-types";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity({ name: "app_user" })
export class AppUser {
  @PrimaryGeneratedColumn({ type: "bigint" })
  public id: number;

  @Column({ type: "varchar", length: 255, nullable: false })
  public email: string;

  @Column({
    type: "varchar", length: 255, name: "display_name", nullable: false, comment: "Display name on FE"
  })
  public displayName: string;

  @Column({
    name: "account_role", type: "enum", enum: UserRole, default: UserRole.USER
  })
  public accountRole: UserRole;

  @Column({ name: "is_email_verified", type: "boolean", default: false })
  public isEmailVerified: boolean;

  @Column({ type: "varchar", length: 32, nullable: false })
  public password: string;

  @Column({
    name: "reset_password_token", type: "varchar", length: 255, nullable: true
  })
  public resetPasswordToken: string | null;

  @Column({ name: "reset_password_expires", type: "datetime", nullable: true })
  public resetPasswordExpires: Date | null;

  @Column({ name: "application_id", type: "bigint", nullable: false })
  public applicationId: string;

  @CreateDateColumn({ name: "created_at" })
  public createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  public updatedAt: Date;
}
