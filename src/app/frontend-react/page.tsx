'use client';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
// import '../../styles/buttonShapes.scss';

export default function FrontendReact() {
  const { t } = useTranslation();

  const rotateShape = () => {
    console.log('Rotate Shape');
  };

  const movePosition = () => {
    console.log('Move Position');
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <Button onClick={rotateShape}>{t('moveShape')}</Button>
      <Button onClick={movePosition}>{t('movePosition')}</Button>
    </div>
  );
}