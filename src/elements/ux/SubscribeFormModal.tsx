import React, { memo, useState } from 'react'
import { TextInput } from '~ui'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '../ui/Button'

interface SubscribeFormModal {
  name: string
  email: string
}

const SubscribeFormModal: React.FC<SubscribeFormModal> = props => {
  const { name, email } = props

  const [isDisable, setIsDisable] = useState<boolean>(false)

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Please enter 3 to 20 characters')
      .max(20, 'Please enter 3 to 20 characters')
      .required(),
    email: yup.string().email('Please enter correct e-mail').required()
  })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = (data: SubscribeFormModal) => {
    setIsDisable(true)
    reset()
  }

  return (
    <>
      <form className='w-full xs:px-20' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-40 relative'>
          <TextInput {...register('email')} name='email' placeholder='Email' variant='modal' />
          <div className='absolute -bottom-30 left-0 text-[#F35A5A] text-10'>{errors.email?.message}</div>
        </div>
        <div className='mb-40 relative'>
          <TextInput
            {...register('name')}
            name='name'
            placeholder='Name'
            variant='modal'
          />
          <div className='absolute -bottom-30 left-0 text-[#F35A5A] text-10'>{errors.name?.message}</div>
        </div>
        <div className='pb-30 '>
          <Button className="w-100% py-10" variant="white"
            disabled={isDisable}>Submit</Button>
        </div>

      </form>
    </>

  )
}

export default memo(SubscribeFormModal)
