// import axios from "axios";
import React, { useState } from 'react'

interface IFormProps {
  onSubmit: (email: string, password: string) => void
}

export function Form(props: IFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { onSubmit } = props

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   await axios.post("https://localhost:3000/login", {
  //     email,
  //     password,
  //   });
  // };

  const handleSubmit2 = (e: React.FormEvent) => {
    onSubmit(email, password)
  }

  return (
    <section>
      <div>
        <div>
          <div>
            <h1>Sign in to your account</h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit2}>
              <div>
                <label htmlFor="email">Your email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <div>
                  <div>
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember">Remember me</label>
                  </div>
                </div>
                <a href="/">Forgot password?</a>
              </div>
              <button type="submit">Sign in</button>
              <p>
                Don’t have an account yet? <a href="/">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
