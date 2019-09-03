import React from 'react'
import { Link } from 'react-router-dom';

export interface DispatchProps {
  logout: () => void,
}

export const Home: React.FC<DispatchProps> = ({ logout }: DispatchProps) => (
  <div>
    <div>Hello world!</div>
    <div><Link to="/login">Log In</Link></div>
    <div><button onClick={logout}>Logout</button></div>
  </div>
)