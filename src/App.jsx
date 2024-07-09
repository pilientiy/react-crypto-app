import AppLayout from './components/Layout/AppLayout';
import { CryptoContextProveder } from './context/crypto-context';


export default function App() { 
  return (
<CryptoContextProveder>  
  <AppLayout/>
</CryptoContextProveder> 
)
}