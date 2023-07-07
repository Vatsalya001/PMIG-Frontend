import React, { useState } from 'react'
import { useGlobalContext } from '../providers/modalProvider'
import styles from '../css/publishPaper.module.css'
import { publish_API } from '../api'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Button } from '../components'

const PublishPaper = () => {
  const { open, closeModal } = useGlobalContext()
  const [title, setTitle] = useState('')
  const [paper, setPaper] = useState()
  const [description, setDescription] = useState('')

  const handleClick = async (e) => {
    e.preventDefault()
    if (title !== '' && description !== '' && paper !== null) {
      let res = await publish_API(paper, title, description)
      if (res.success) {
        toast(`Paper Published Successfully!`, {
          position: 'top-left',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
        setTitle('')
        setDescription('')
        setPaper(null)
        closeModal()
      } else {
        toast(`${res.message}`, {
          position: 'top-left',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      }
    }
  }

  return (
    <div className={open ? styles.modal : styles.show}>
      <form className={styles.form}>
        <input
          type='text'
          className={styles.inputField}
          placeholder='Paper Title'
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type='text'
          className={styles.inputField}
          placeholder='Description'
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type='file'
          className={styles.inputField}
          name='file'
          onChange={(e) => setPaper(e.target.files[0])}
        />
        <Button
          text='PublishPaper'
          onClick={(e) => {
            handleClick(e)
          }}
        />
        <Button text='Close' onClick={closeModal} />
      </form>
    </div>
  )
}

export default PublishPaper
