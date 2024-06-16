import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { FormatError, FormatSuccess } from '../resources/Helper.js'
import Tag from '#models/tag'

export default class TagsController {
  async index({ response }: HttpContextContract) {
    try {
      const tags: any = await Tag.all()
      return FormatSuccess(response, 'Tags', tags)
    } catch (error) {
      return FormatError(response, error.message, error, 500)
    }
  }

  async store({ request, response }: HttpContextContract) {
    try {
      const { name } = request.all();
      const tag = await Tag.create({ name })
      return FormatSuccess(response, 'Tag created successfully.', tag)
    } catch (error) {
      return FormatError(response, error.message, error, 500)
    }
  }

  async update({ request, response }: HttpContextContract) {
    try {
      const { tag_id, name } = request.all();
      const tag = await Tag.find(tag_id)
      if (!tag) {
        return FormatError(response, 'Tag not found: ' + tag_id, {}, 400)
      }
      tag.name = name
      await tag.save()
      return FormatSuccess(response, 'Tag updated successfully.', tag)
    } catch (error) {
      return FormatError(response, error.message, error, 500)
    }
  }

  async delete({ request, response }: HttpContextContract) {
    try {
      const { tag_id } = request.all();
      const tag = await Tag.find(tag_id)
      if (!tag) {
        return FormatError(response, 'Tag not found: ' + tag_id, {}, 400)
      }
      await tag.delete();
      return FormatSuccess(response, 'Tag deleted successfully.', {})
    } catch (error) {
      return FormatError(response, error.message, error, 500)
    }
  }
}
