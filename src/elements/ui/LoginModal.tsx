import React, {FC, memo, useCallback, useState} from 'react';
import {Modal} from "~ux";
import axios from "axios";

interface LoginModalProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const LoginModal: FC<LoginModalProps> = ({isOpen, setIsOpen}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const token = localStorage.getItem('token')

  const sendUserData = useCallback( async () => {
    const response = await axios.post('http://localhost:3000/signin', {
      "email": email,
      "password": password
    })
    if (response.data.accessToken) {
      setIsOpen(false)
      localStorage.setItem('token', response.data.accessToken)
      window.location.reload()
    }
    console.log(response.data)
  }, [email, password])

  return (
    <Modal isOpen={isOpen} onCloseModal={() => setIsOpen(false)}>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (email.length > 3 && password.length > 3) sendUserData()
        else window.confirm('Введите в каждом поле больше чем 3 символа')
        setPassword('')
        setEmail('')
      }} className="p-20 min-h-[200px] flex flex-col gap-y-40">
        <div className="w-[400px] mx-auto flex flex-col gap-y-20">
          <input min={4} required onChange={(e) => setEmail(e.target.value)} type="email" value={email} placeholder="Введите email"/>
          <input min={4} required onChange={(e) => setPassword(e.target.value)} type="password" value={password} placeholder="Введите пароль"/>
        </div>
        <div className="flex justify-end items-center">
          <button className="bg-[#FFD300] px-6 py-14 text-16">Отправить</button>
        </div>
      </form>
    </Modal>
  );
};

export default memo(LoginModal);