import React from 'react';
import { FooterCont } from './style';

export default function Footer() {
  const thisYear = new Date().getFullYear();

  return <FooterCont>© {thisYear} Chingu V37 Gecko-Team-04</FooterCont>;
}
