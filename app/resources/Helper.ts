export const FormatSuccess = async (res:any, message:string, data:any, status?:any) => {
  return res.status(status ?? 200).send({
    success: true,
    message: message,
    data: data
  })
}
export const FormatError = async (res:any, message:string, error:any, status?:any) => {
  return res.status(status ?? 400).send({
    success: false,
    message: message,
    error: error
  })
}
