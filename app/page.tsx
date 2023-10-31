export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Home</h1>
      <menu>
        <a href="/auth/login">Login</a>
        <a href="/auth/signup">Signup</a>
      </menu>
    </main>
  );
}
