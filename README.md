# ERMA Family Site

This project is built with [Next.js](https://nextjs.org) using the **App Router**.

## Running locally

1. Install the dependencies:
   ```bash
   npm install
   ```
2. Create a `.env.local` file in the project root and set the following environment variables:
   ```
   OPENAI_API_KEY=your-openai-key
   GEMINI_API_KEY=your-gemini-key
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## `/api/contact` route

This route accepts `POST` requests with `multipart/form-data`. The expected fields are:

- `question` – your question to the assistant
- `lang` – language code (`bg`, `en`, `de`)
- `attachment` – optional file to upload

Uploaded files are saved under the `tmp/` directory with a generated unique name. The route calls the Gemini API and returns a JSON response containing the AI answer and info about the uploaded file.

## Learn more

Refer to the [Next.js documentation](https://nextjs.org/docs) for additional guides and features. You can deploy the project easily on [Vercel](https://vercel.com).
