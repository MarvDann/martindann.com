import type { Component } from 'solid-js'
import { createSignal, Show } from 'solid-js'
import './ContactModal.css'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  honeypot: string
  timestamp: number
}

const ContactModal: Component<{ isOpen: boolean; onClose: () => void }> = (props) => {
  const [formData, setFormData] = createSignal<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
    timestamp: Date.now()
  })

  const [errors, setErrors] = createSignal<Partial<Record<keyof FormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = createSignal(false)
  const [submitStatus, setSubmitStatus] = createSignal<'idle' | 'success' | 'error'>('idle')

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const re = /^[\d\s\-\+\(\)]+$/
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10
  }

  const validateField = (field: keyof FormData, value: string) => {
    const newErrors = { ...errors() }

    switch (field) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Name is required'
        } else if (value.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters'
        } else {
          delete newErrors.name
        }
        break
      case 'email':
        if (!value.trim()) {
          newErrors.email = 'Email is required'
        } else if (!validateEmail(value)) {
          newErrors.email = 'Please enter a valid email'
        } else {
          delete newErrors.email
        }
        break
      case 'phone':
        if (!value.trim()) {
          newErrors.phone = 'Phone number is required'
        } else if (!validatePhone(value)) {
          newErrors.phone = 'Please enter a valid phone number'
        } else {
          delete newErrors.phone
        }
        break
      case 'message':
        if (!value.trim()) {
          newErrors.message = 'Message is required'
        } else if (value.trim().length < 10) {
          newErrors.message = 'Message must be at least 10 characters'
        } else {
          delete newErrors.message
        }
        break
    }

    setErrors(newErrors)
  }

  const handleInput = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    validateField(field, value)
  }

  const isFormValid = (): boolean => {
    const data = formData()
    return (
      data.name.trim().length >= 2 &&
      validateEmail(data.email) &&
      validatePhone(data.phone) &&
      data.message.trim().length >= 10 &&
      Object.keys(errors()).length === 0
    )
  }

  const handleSubmit = async (e: Event) => {
    e.preventDefault()

    const data = formData()

    // Bot protection checks
    if (data.honeypot !== '') {
      // Honeypot field was filled - likely a bot
      console.log('Bot detected (honeypot)')
      return
    }

    // Check if form was filled too quickly (less than 3 seconds)
    const timeTaken = Date.now() - data.timestamp
    if (timeTaken < 3000) {
      console.log('Bot detected (too fast)')
      return
    }

    setIsSubmitting(true)

    try {
      // Here you would send the form data to your backend
      // For now, we'll just log it and show success
      console.log('Form submitted:', {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message
      })

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      setSubmitStatus('success')

      // Reset form after 2 seconds and close modal
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          honeypot: '',
          timestamp: Date.now()
        })
        setSubmitStatus('idle')
        props.onClose()
      }, 2000)

    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    if (!isSubmitting()) {
      props.onClose()
    }
  }

  return (
    <Show when={props.isOpen}>
      <div class="modal-overlay" onClick={handleClose}>
        <div class="modal-content" onClick={(e) => e.stopPropagation()}>
          <button class="modal-close" onClick={handleClose} aria-label="Close modal">
            ×
          </button>

          <h2 class="modal-title">Get In Touch</h2>
          <p class="modal-subtitle">Fill out the form below and I'll get back to you soon.</p>

          <Show when={submitStatus() === 'success'}>
            <div class="alert alert-success">
              Thank you! Your message has been sent successfully.
            </div>
          </Show>

          <Show when={submitStatus() === 'error'}>
            <div class="alert alert-error">
              Sorry, there was an error sending your message. Please try again.
            </div>
          </Show>

          <form onSubmit={handleSubmit} class="contact-form">
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="website"
              value={formData().honeypot}
              onInput={(e) => handleInput('honeypot', e.currentTarget.value)}
              style={{ display: 'none' }}
              tabIndex={-1}
              autocomplete="off"
            />

            <div class="form-group">
              <label for="name">Name *</label>
              <input
                type="text"
                id="name"
                value={formData().name}
                onInput={(e) => handleInput('name', e.currentTarget.value)}
                onBlur={(e) => validateField('name', e.currentTarget.value)}
                class={errors().name ? 'error' : ''}
                disabled={isSubmitting()}
              />
              <Show when={errors().name}>
                <span class="error-message">{errors().name}</span>
              </Show>
            </div>

            <div class="form-group">
              <label for="email">Email *</label>
              <input
                type="email"
                id="email"
                value={formData().email}
                onInput={(e) => handleInput('email', e.currentTarget.value)}
                onBlur={(e) => validateField('email', e.currentTarget.value)}
                class={errors().email ? 'error' : ''}
                disabled={isSubmitting()}
              />
              <Show when={errors().email}>
                <span class="error-message">{errors().email}</span>
              </Show>
            </div>

            <div class="form-group">
              <label for="phone">Contact Number *</label>
              <input
                type="tel"
                id="phone"
                value={formData().phone}
                onInput={(e) => handleInput('phone', e.currentTarget.value)}
                onBlur={(e) => validateField('phone', e.currentTarget.value)}
                class={errors().phone ? 'error' : ''}
                disabled={isSubmitting()}
              />
              <Show when={errors().phone}>
                <span class="error-message">{errors().phone}</span>
              </Show>
            </div>

            <div class="form-group">
              <label for="message">Message *</label>
              <textarea
                id="message"
                rows={5}
                value={formData().message}
                onInput={(e) => handleInput('message', e.currentTarget.value)}
                onBlur={(e) => validateField('message', e.currentTarget.value)}
                class={errors().message ? 'error' : ''}
                disabled={isSubmitting()}
              />
              <Show when={errors().message}>
                <span class="error-message">{errors().message}</span>
              </Show>
            </div>

            <button
              type="submit"
              class="btn btn-primary"
              disabled={!isFormValid() || isSubmitting()}
            >
              {isSubmitting() ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </Show>
  )
}

export default ContactModal
