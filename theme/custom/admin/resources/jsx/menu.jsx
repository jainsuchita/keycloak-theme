const StyledMenu = styled.nav`
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    webkit-transition: 300ms cubic-bezier(0.2, 0, 0.38, 0.9);
    transition: 300ms cubic-bezier(0.2, 0, 0.38, 0.9);
    width: 312px;
    background-color:  rgb(38,38,38);
    margin-top: 50px;

    @media screen and (min-width: 42rem){
        .pal--side-nav {
            background-color: rgb(38,38,38);
            display: flex;
        }
    }

    @media (max-width: 576px) {
        width: 100%;
        }

`

const Menu = ({ open }) => {
    return (
        <StyledMenu open={open} aria-label="Page navigation menu"
            class="pal--side-nav pal--world-level-nav left-nav-wrapper col-sm-3 col-md-2 col-sm-pull-9 col-md-pull-10 sidebar-pf sidebar-pf-left"
            id="security-compliance-ui--left-nav">

            <h2 class="pal--side-nav__item pal--side-nav__header">
                <a href="/security-compliance/"
                    class="pal--side-nav__link">Compliance Authority
                </a>
            </h2>

            <ul class="pal--side-nav__items">

                <li class="pal--side-nav__item pal--side-nav__item--active">
                    <a href="/security-compliance/dashboard"
                        class="pal--side-nav__link" id="left-nav-dashboard" aria-current="page">
                        Dashboard
                    </a>
                </li>

                <li class="pal--side-nav__item left-nav__title">
                    <a href="/security-compliance/" class="pal--side-nav__link"
                        id="left-nav-automate-compliance" disabled="">Automate Security and Compliance
                    </a>
                </li>

                <li class="pal--side-nav__item pal--side-nav__item--with-menu">
                    <button aria-haspopup="true"
                        aria-expanded="false" type="button" class="pal--side-nav__menu-button"
                        id="left-nav-automate-compliance-validate">Assess
                        <svg focusable="false"
                            preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" class="pal--side-nav__menu-icon">
                            <path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path>
                        </svg>
                    </button>

                    <ul class="pal--side-nav__menu">
                        <li class="pal--side-nav__item">
                            <a href="/security-compliance/scans" class="pal--side-nav__link"
                                id="left-nav-scans">Scans
                            </a>
                        </li>
                        <li class="pal--side-nav__item">
                            <a href="/security-compliance/remediation" class="pal--side-nav__link"
                                id="left-nav-remediation">Remediation
                            </a>
                        </li>
                        <li class="pal--side-nav__item">
                            <a href="/security-compliance/remediation" class="pal--side-nav__link"
                                id="left-nav-security-insights">Security Insights
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="pal--side-nav__item pal--side-nav__item--with-menu">
                    <button aria-haspopup="true"
                        aria-expanded="false" type="button" class="pal--side-nav__menu-button"
                        id="left-nav-automate-compliance-configure">Configure
                        <svg focusable="false"
                            preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" class="pal--side-nav__menu-icon">
                            <path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path>
                        </svg>
                    </button>

                    <ul class="pal--side-nav__menu">
                        <li class="pal--side-nav__item">
                            <a href="/security-compliance/scopes" class="pal--side-nav__link"
                                id="left-nav-scopes">Scopes
                            </a>
                        </li>
                        <li class="pal--side-nav__item">
                            <a href="/security-compliance/goals" class="pal--side-nav__link"
                                id="left-nav-controls">Goals
                            </a>
                        </li>
                        <li class="pal--side-nav__item">
                            <a href="/security-compliance/profiles" class="pal--side-nav__link"
                                id="left-nav-profiles">Profiles
                            </a>
                        </li>
                        <li class="pal--side-nav__item">
                            <a href="/security-compliance/settings" class="pal--side-nav__link"
                                id="left-nav-settings">Settings
                            </a>
                        </li>
                    </ul>
                </li>

            </ul>
        </StyledMenu>
    )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 11px;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  z-index: 10;

   -webkit-transition: 110ms cubic-bezier(0.2, 0, 0.38, 0.9); 
   transition: 110ms cubic-bezier(0.2, 0, 0.38, 0.9);

  &:focus {
    outline: none;
  }

  svg {
      fill: white;
  }

  .btn-inactive{
      display: none;
  }
`

const Burger = ({ open, setOpen }) => {
    return (
        <StyledBurger open={open} onClick={() => setOpen(!open)} class="bx--left-nav__trigger bx--left-nav__trigger--active" data-left-nav-toggle="open" aria-haspopup="true" aria-label="Close Global Navigation" aria-expanded="true" data-aria-open="Close Global Navigation" data-aria-closed="Expand Global Navigation">

            <svg class={`btn-${!open ? 'active' : "inactive"}`} focusable="false" preserveAspectRatio="xMidYMid meet" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 14.8H18V16H2zM2 11.2H18V12.399999999999999H2zM2 7.6H18V8.799999999999999H2zM2 4H18V5.2H2z">
                </path>
            </svg>

            <svg class={`btn-${open ? 'active' : "inactive"}`} focusable="false" preserveAspectRatio="xMidYMid meet" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M24 9.4L22.6 8 16 14.6 9.4 8 8 9.4 14.6 16 8 22.6 9.4 24 16 17.4 22.6 24 24 22.6 17.4 16 24 9.4z">
                </path>
            </svg>

        </StyledBurger>
    )
}


const App = () => {
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
    return (
        <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('sidebar-ibm'));

const useOnClickOutside = (ref, handler) => {
    React.useEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        };
    },
        [ref, handler],
    );
};