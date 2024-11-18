import trophy from '../img/trophy.png'
import './SecretNumber.css'

import { useState } from 'react'
import { Button, Form, InputNumber } from 'antd'

const MAX_VALUE = 100
const newSecretNumber = () => {return parseInt(Math.random() * MAX_VALUE + 1)}

const SecretNumber = () => {
    const [secretNumber, setSecretNumber] = useState(newSecretNumber)
    const [isMatch, setIsMatch] = useState(false)
    const [userNumber, setUserNumber] = useState(null)
    const [counter, setCounter] = useState(0)
    const [form] = Form.useForm()
    const onFinish = (values) => {
        setIsMatch(parseInt(values.number) === secretNumber)
        setUserNumber(parseInt(values.number))
        setCounter(counter + 1)
        form.resetFields()
    }
    const onReset = () => {
        setIsMatch(false)
        setUserNumber(null)
        setCounter(0)
        form.resetFields()
        setSecretNumber(newSecretNumber)
    }
    const hintMessage = () => {
        const hintValue = secretNumber > userNumber ? 'higher' : 'lower'
        return (<h2>The secret number is {hintValue} than {userNumber}</h2>)
    }
    return (
        <>
            <div className='container-text'>
                {!isMatch ? (<>
                    <h1>Secret Number Game</h1>
                    <Form layout='inline' form={form} onFinish={onFinish}>
                        <Form.Item  name='number' rules={[{required: true}]}>
                            <InputNumber placeholder={`Number from 1 to ${MAX_VALUE}`} min={1} max={MAX_VALUE} style={{width: 200}}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit'>Submit</Button>
                        </Form.Item>
                    </Form>
                    { !userNumber ? '' : hintMessage() }
                </>) : (
                    <>
                        <img src={trophy} alt='trophy icon'/>
                        <h1>You <span className='text-blue'>got it!</span></h1>
                        <h2>The secret number was found in {counter} tries</h2>
                        <Button type='primary' className={'play-button'} onClick={onReset}>Play again</Button>
                    </>
                )}
            </div>
        </>
    )
}

export default SecretNumber