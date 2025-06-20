import styles from './ContactSection.module.scss';

type ContactLink = {
  platform: string;
  url: string;
  displayText: string;
};

const contactLinks: ContactLink[] = [
  {
    platform: 'Email',
    url: 'mailto:hello@mztthieu.fr',
    displayText: 'hello@mztthieu.fr'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/mz99b',
    displayText: 'github.com/mz99b'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/matt8i3u/',
    displayText: 'linkedin.com/in/matt8i3u'
  }
];

const ContactSection = () => {
  return (
    <ul className={styles.linksList}>
      {contactLinks.map((link) => (
        <li key={link.platform}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            <span>{link.platform}:</span> {link.displayText}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactSection;
