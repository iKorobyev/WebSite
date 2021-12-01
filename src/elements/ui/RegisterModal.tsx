import React, {FC, memo, useCallback, useEffect, useState} from 'react';
import {Modal} from "~ux";
import axios from "axios";

interface RegisterModalProps {
  isOpenRegisterModal: boolean
  setIsOpenRegisterModal: (isOpen: boolean) => void
}

const RegisterModal: FC<RegisterModalProps> = ({isOpenRegisterModal, setIsOpenRegisterModal}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const sendUserData = useCallback( async () => {
    await axios.post('http://localhost:3000/signup', {
      "email": email,
      "password": password,
      "username": username
    })
    console.log('Создалось')
  }, [email, password, username])

  return (
    <Modal isOpen={isOpenRegisterModal} onCloseModal={() => setIsOpenRegisterModal(false)}>
      <form onSubmit={(e) => {
        e.preventDefault();
        if (email.length > 3 && password.length > 3 && username.length > 3) {
          sendUserData()
          setIsOpenRegisterModal(false)
          window.alert('Теперь Вы можете авторизироваться')
        }
        else window.alert('Введите в каждом поле больше чем 3 символа')
        setUsername('')
        setPassword('')
        setEmail('')
      }} className="p-20 min-h-[200px] flex flex-col gap-y-40">
        <div className="w-[400px] mx-auto flex flex-col gap-y-20">
          <input min={4} required onChange={(e) => setUsername(e.target.value)} type="text" value={username} placeholder="Введите username"/>
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

export default memo(RegisterModal);