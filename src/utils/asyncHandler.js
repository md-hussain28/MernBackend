const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
export {asyncHandler};

// const asyncHandler = (fn) => async (req, res, next) => {
//   // Outer function takes `fn` (the async function to wrap)
//   try {
//     // Inner function handles the request, response, and middleware flow
//     await fn(req, res, next);
//   } catch (error) {
//     // Catch errors and send a standardized JSON response
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message, // Format the error message for the client
//     });
//   }
// };

// export default asyncHandler;
