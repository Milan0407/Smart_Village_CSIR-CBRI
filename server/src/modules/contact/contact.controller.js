import * as contactService from "./contact.service.js";

import ApiResponse from "../../utils/ApiResponse.js";

export const sendContactMessage = async (
  req,
  res
) => {
  const result =
    await contactService.sendContactMessage(
      req.body
    );

  return res.json(
    new ApiResponse(
      200,
      result,
      "Message sent successfully"
    )
  );
};