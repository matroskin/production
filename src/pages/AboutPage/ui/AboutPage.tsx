import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation('about');

  return (
    <div>{t('О проекте')}</div>
  );
}

export default AboutPage;
