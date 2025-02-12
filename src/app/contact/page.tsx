'use client';
import { socialLinksFooter } from '@/components/footer/contract';
import { ContactItem, ContactList, ContactsWrapper } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <ContactsWrapper>
      <h1>Contatos</h1>
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
