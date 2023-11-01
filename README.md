This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

## Naming `.tsx` files

How should you name your `.tsx` files?

Common naming conventions you might see:

* DismissButton.tsx
* dismissButton.tsx
* dismiss_button.tsx
* **dismiss-button.tsx**

### PascalCase

When your framework or dev tools **don't** use file based routing, so the file name has nothing to do with the url, then it usually makes a lot of sense to use **PascalCase**. That way the default export of a component matches the file name. 

**DismissButton.tsx**

```tsx 
export default function DismissButton() {
  return <button>Dismiss</button>
}
```

However, when your framework or dev tools **do** use file based routing, then it makes a lot of sense to use **kebab-case**. This is the case in Next.js, where the file name is used to determine the url.

### kebab-case

PascalCase, camelCase, or any case that potentially depends on distinguishing between uppercase and lowercase letters can be problematic in URLs. Most Unix-based web servers (not MacOS, but who uses MacOS as a web server anyway?) are case-sensitive, whereas some like Microsoft's IIS are not.

That leaves us with lowercase naming conventions, and kebab-case is popular and reliable. It's hard to find a reason **not** to use this case, so let's use it for our urls. 

Next.js uses a file-system based router, which means that the names of our directories will appear as part of the url. So directory names will be kebab case. On top of that, the framework uses kebab-case for its `.tsx` file names, even when they don't appear as part of the url. One example in their docs is the [`not-found.tsx`](https://nextjs.org/docs/app/api-reference/file-conventions/not-found) page:

```tsx
// not-found.tsx
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
```

You can see the name of the file uses kebab-case even though the default export uses PascalCase. 

Consistency is important within a project so it makes sense to keep all `.tsx` files in kebab-case, even when they don't represent an entire page. So here's an example of a route:

```
- 📁 app
  - 📁 create-post
    - 📄 page.tsx
    - 📄 not-found.tsx
    - 📄 create-post-form.tsx
    - 📄 submit-button.tsx
```

Each of these files would contain a react component as the default export, and remember that react components are PascalCase. 

All of this only applies to `.tsx` files. Other files, including `.js` or `.ts` files, can use PascalCase or camelCase depending on your preference. For example, I default export a helper `calculateTotals` function in `/src/utils/calculateTotals.ts`.

### Summary

* Maintain consistency in your `.tsx` file naming for readability and maintainability.
* Use kebab-case with diretories and `.tsx` files when you are dealing with file-based routing.
* Use PascalCase when not dealing with file-based routing.
* Other file types can use PascalCase or camelCase based on your project's guidelines.