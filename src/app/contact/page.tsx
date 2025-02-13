'use client';
import { socialLinksFooter } from '@/components/footer/contract';
import { ContactItem, ContactList, ContactsWrapper } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslations } from 'next-intl';

const Contact = () => {
  const t = useTranslations();
  return (
    <ContactsWrapper>
      <h1>{t('contactTitle')}</h1>
      <ContactList>
        {socialLinksFooter.map((item) => (
          <ContactItem key={item.link} $hoverColor={item.hoverColor}>
            <a href={item.link} target="_blank">
              <FontAwesomeIcon icon={item.icon} />
              {item.name}
            </a>
          </ContactItem>
        ))}
      </ContactList>
    </ContactsWrapper>
  );
};

export default Contact;
