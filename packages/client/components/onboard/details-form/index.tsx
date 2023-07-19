import React, { FC } from 'react';
import {Input } from '@/app-components'
import classNames from './index.module.scss'

const DetailsForm: FC<{}> = () => {
  return (
    <form className={classNames['details-form']}>
      <Input size="large" placeholder='Please enter your name' onChange={() => {}}/>
    </form>
  )
}

export default DetailsForm;