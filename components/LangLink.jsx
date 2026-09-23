import { Link } from 'react-router-dom'
import { useLang, localizedPath } from '../hooks/useLang'

/**
 * Like react-router's <Link>, but writes the URL in the *active* language and
 * maps it consistently with the language switcher.
 */
export default function LangLink({ to, children, ...rest }) {
  const { lang } = useLang()
  return (
    <Link to={localizedPath(lang, to)} {...rest}>
      {children}
    </Link>
  )
}
