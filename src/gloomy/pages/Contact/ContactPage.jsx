import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useLanguage } from '../../i18n/LanguageContext'
import './ContactPage.scss'

export const ContactPage = () => {
  const { t } = useLanguage()
  const fieldKeys = ["name", "email", "phone", "website"]
  const [submitState, setSubmitState] = useState({
    status: "idle",
    message: "",
  })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      message: "",
    },
  })

  const onSubmit = async (values) => {
    setSubmitState({ status: "idle", message: "" })

    try {
      await axios.post("/.netlify/functions/contact-lead", values)
      setSubmitState({
        status: "success",
        message: t("contactLanding.form.success"),
      })
      reset()
    } catch (error) {
      const message =
        error.response?.data?.error || t("contactLanding.form.error")

      setSubmitState({
        status: "error",
        message,
      })
    }
  }

  return (
    <section className="contact-page">
      <div className="contact-page__top">
        <div className="contact-page__headline">
          <h1>{t("contactLanding.title")}</h1>
          <a className="contact-page__cta" href="#contact-form">
            {t("contactLanding.cta")} <span>→</span>
          </a>
        </div>

        <p className="contact-page__intro-copy">{t("contactLanding.intro")}</p>
      </div>

      <div className="contact-page__form-section" id="contact-form">
        <div className="contact-page__form-copy">
          <h2>{t("contactLanding.form.title")}</h2>
          <p>{t("contactLanding.form.description")}</p>
        </div>

        <form
          className="contact-page__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="contact-page__field-grid">
            {fieldKeys.map((fieldKey) => (
              <label className="contact-page__field" key={fieldKey}>
                <span className="sr-only">{t(`contactLanding.form.fields.${fieldKey}`)}</span>
                <input
                  placeholder={t(`contactLanding.form.fields.${fieldKey}`)}
                  type={fieldKey === "email" ? "email" : fieldKey === "phone" ? "tel" : "text"}
                  {...register(fieldKey, {
                    required: t(`contactLanding.form.validation.${fieldKey}`),
                    pattern:
                      fieldKey === "email"
                        ? {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: t("contactLanding.form.validation.email"),
                          }
                        : undefined,
                  })}
                />
                {errors[fieldKey] && (
                  <span className="contact-page__field-error">
                    {errors[fieldKey].message}
                  </span>
                )}
              </label>
            ))}
          </div>

          <label className="contact-page__field contact-page__field--message">
            <span className="sr-only">{t("contactLanding.form.fields.message")}</span>
            <textarea
              placeholder={t("contactLanding.form.fields.message")}
              rows="7"
              {...register("message", {
                required: t("contactLanding.form.validation.message"),
              })}
            />
            {errors.message && (
              <span className="contact-page__field-error">{errors.message.message}</span>
            )}
          </label>

          {submitState.message && (
            <p
              className={`contact-page__form-status contact-page__form-status--${submitState.status}`}
              role="status"
            >
              {submitState.message}
            </p>
          )}

          <button className="contact-page__submit" type="submit" disabled={isSubmitting}>
            {isSubmitting
              ? t("contactLanding.form.submitting")
              : t("contactLanding.form.submit")}
          </button>
        </form>
      </div>

      <div className="contact-page__details">
        <div className="contact-page__visit-card">
          <h2>{t("contactLanding.visit.title")}</h2>
        </div>

        <div className="contact-page__details-content">
          <a className="contact-page__phone" href="tel:+12156060391">
            {t("contactLanding.visit.phone")}
          </a>

          <div className="contact-page__info-grid">
            <div className="contact-page__info-block">
              <h3>{t("contactLanding.visit.officeTitle")}</h3>
              <p>{t("contactLanding.visit.addressLine1")}</p>
              <p>{t("contactLanding.visit.addressLine2")}</p>
            </div>

            <div className="contact-page__info-block">
              <h3>{t("contactLanding.visit.hoursTitle")}</h3>
              <p>{t("contactLanding.visit.hoursDays")}</p>
              <p>{t("contactLanding.visit.hoursTime")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
