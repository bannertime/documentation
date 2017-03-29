import React, { Component } from 'react';
import Link from '../link/link';

const block = 'sidebar-item';

export default class SidebarItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: this._isOpen(props)
    };
  }

  render() {
    const { title, anchors = [] } = this.props;
    const openMod = this.state.open ? `${block}--open` : '';

    return (
      <div className={ `${block} ${openMod}` }>
        { anchors.length > 0 ? (
          <i
            className={ `${block}__toggle icon-chevron-right` }
            onClick={ this._toggle.bind(this) } />
        ) : null }

        <Link
          className={ `${block}__title` }
          to={ this.props.url }>
          { title }
        </Link>

        { anchors.length > 0 ? (
          <ul className={ `${block}__anchors` }>
            {
              anchors.map(anchor => (
                <li
                  className={ `${block}__anchor` }
                  key={ `anchor-${title}-${anchor.id}` }>
                  <a href={ this._generateAnchorURL(anchor) }>
                    { anchor.title }
                  </a>
                </li>
              ))
            }
          </ul>
        ) : null }
      </div>
    );
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.currentPage !== this.props.currentPage ) {
      this.setState({
        open: this._isOpen(nextProps)
      });
    }
  }

  /**
   * Checks whether the item should be expanded
   *
   * @param {object} props - The current props
   */
  _isOpen(props) {
    return `/${props.currentPage}` === props.url;
  }

  /**
   * Toggles the open state (expanded/collapsed)
   *
   * @param {object} e - Click event
   */
  _toggle(e) {
    const { onToggle } = this.props;

    this.setState({
      open: !this.state.open
    }, () => {
      if (typeof onToggle === 'function') {
        onToggle();
      }
    });
  }

  /**
   * Generate the url for the given [anchor] depending on the current page
   *
   * @return {object} anchor - The anchor object containing its id
   */
  _generateAnchorURL(anchor) {
    const { currentPage, url } = this.props;

    if ( `/${currentPage}` === url ) {
      return `#${anchor.id}`;

    } else return `${url}#${anchor.id}`;
  }
}