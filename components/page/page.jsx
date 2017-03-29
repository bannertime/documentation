import React from 'react';
import { trimEnd } from 'lodash';
import Interactive from 'antwar-interactive';
import Container from '../container/container';
import Sidebar from '../sidebar/sidebar';
import Gitter from '../gitter/gitter';
import Contributors from '../contributors/contributors';
import './page-style';
import '../sidebar/sidebar-style';
import '../gitter/gitter-style';

export default ({ section, page }) => {
  const contentUrl = 'https://github.com/bannertime/documentation/edit/develop/content/';
  const edit = page.edit || `${contentUrl}${trimEnd(page.url, '/')}${page.type === 'index' ? '/index' : ''}.md`;

  return (
    <Container className="page">
      <Interactive
        id="components/sidebar/sidebar.jsx"
        component={ Sidebar }
        sectionName={ section.name }
        pages={ section.pages().map(page => ({
          url: page.url,
          title: page.title,
          anchors: page.anchors
        })) }
        currentPage={ page.url.replace('/index', '') }
      />

      <section className="page__content">
        <h1>{ page.title }</h1>

        <a className="page__edit" href={ edit }>
          Edit this Page
          &nbsp;&nbsp;
          <i className="icon-edit" />
        </a>

        <div dangerouslySetInnerHTML={{ __html: page.content }} />

        <hr style={{ display: page.contributors.length ? 'block' : 'none' }} />
        <h3 style={{ display: page.contributors.length ? 'block' : 'none' }}>Contributors</h3>
        <Contributors contributors={ page.contributors } />

        <Interactive
          id="components/gitter/gitter.jsx"
          component={ Gitter } />
      </section>
    </Container>
  );
};
