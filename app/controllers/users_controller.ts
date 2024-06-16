import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "#models/user"
import { FormatError, FormatSuccess } from "../resources/Helper.js";

export default class UsersController {

  async index({ response }: HttpContextContract) {
    try {
      const users:any = await User.all();
      return FormatSuccess(response, 'Users', users);
    } catch (error) {
      return FormatError(response, error.message, error);
    }
  }

}
