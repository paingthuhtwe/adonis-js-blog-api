import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Category from '#models/category'
import { FormatError, FormatSuccess } from '../resources/Helper.js'

export default class CategoriesController {
  async index({ response }: HttpContextContract) {
    try {
      const categories: any = await Category.all()
      return FormatSuccess(response, 'Categories', categories)
    } catch (error) {
      return FormatError(response, error.message, error, 500)
    }
  }

  async store({ request, response }: HttpContextContract) {
    try {
      const { name } = request.all();
      const category = await Category.create({ name })
      return FormatSuccess(response, 'Category created successfully.', category)
    } catch (error) {
      return FormatError(response, error.message, error, 500)
    }
  }

  async update({ request, response }: HttpContextContract) {
    try {
      const { category_id, name } = request.all();
      const category = await Category.find(category_id)
      if (!category) {
        return FormatError(response, 'Category not found: ' + category_id, {}, 400)
      }
      category.name = name
      await category.save()
      return FormatSuccess(response, 'Category updated successfully.', category)
    } catch (error) {
      return FormatError(response, error.message, error, 500)
    }
  }

  async delete({ request, response }: HttpContextContract) {
    try {
      const { category_id } = request.all();
      const category = await Category.find(category_id)
      if (!category) {
        return FormatError(response, 'Category not found: ' + category_id, {}, 400)
      }
      await category.delete();
      return FormatSuccess(response, 'Category deleted successfully.', {})
    } catch (error) {
      return FormatError(response, error.message, error, 500)
    }
  }
}
