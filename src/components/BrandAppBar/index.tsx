import { Dispatch, SetStateAction } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useOutsideClick } from 'src/hooks/useOutsideClick';
import styles from './appBar.module.scss';

const brands = ['benefit', 'clinique', 'colourpop', 'dior', 'e.l.f.', 'fenty', 'glossier', 'maybelline', 'nyx', 'revlon'];

const BrandAppBar = (props: { visibleAppBar: boolean; setVisibleAppBar: Dispatch<SetStateAction<boolean>> }) => {
  const navigate = useNavigate();
  const targetRef = useOutsideClick(() => props.setVisibleAppBar(false));

  return (
    <div className={styles.bar} ref={targetRef}>
      <h4>Brands List</h4>
      <ul>
        {brands.map((brand) => (
          <li
            key={brand}
            onClick={() => {
              props.setVisibleAppBar(false);
              navigate(`/brand/${brand}`);
            }}>
            {brand}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandAppBar;
