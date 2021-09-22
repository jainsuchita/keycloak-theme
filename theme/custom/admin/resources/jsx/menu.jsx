const StyledMenu = styled.nav`
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    height: 100vh;
    text-align: left;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    webkit-transition: 300ms cubic-bezier(0.2, 0, 0.38, 0.9);
    transition: 300ms cubic-bezier(0.2, 0, 0.38, 0.9);
    width: 312px;
    background-color:  rgb(38,38,38);
    margin-top: 50px;

    & a{
        padding: 8px 12px 8px 16px;
    }

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

const DropDownMenu = styled.ul`
    list-style: none;
    max-height: 0;
    overflow: hidden;
    visibility: none;
    transition: all 240ms cubic-bezier(0.2, 0, 0.38, 0.9);
    transition-property: max-height, opacity, visibility;
    padding: 0;

    &.dropdown__list--active {
        max-height: 400px; 
        opacity: 1;
        visibility: visible;
    }

    & a{
        padding: 8px 24px;
    }
`
const Menu = ({ open }) => {
    const [listName, setListName] = React.useState({});

    const assessItems = [
        {
            name: "Scans",
            href: "http://localhost:4000/security-compliance/scans",
            id: "left-nav-scans"
        },

        {
            name: "Remediation",
            href: "http://localhost:4000/security-compliance/remediation",
            id: "left-nav-remediation"
        },

        {
            name: "Security Insights",
            href: "http://localhost:4000/security-compliance/remediation",
            id: "left-nav-security-insights"
        },
    ];

    const configureItems = [
        {
            name: "Scopes",
            href: "http://localhost:4000/security-compliance/scopes",
            id: "left-nav-scopes"
        },

        {
            name: "Goals",
            href: "http://localhost:4000/security-compliance/goals",
            id: "left-nav-controls"
        },

        {
            name: "Profiles",
            href: "http://localhost:4000/security-compliance/profiles",
            id: "left-nav-profiles"
        },

        {
            name: "Settings",
            href: "http://localhost:4000/security-compliance/settings",
            id: "left-nav-settings"
        },
        {
            name: "Access Management",
            href: "localhost:8080/auth/admin/master/console",
            id: "left-nav-accessManagement"
        },
    ]

    const handleListClick = (name) => {
        setListName({
            ...listName,
            [name]: !listName[name]
        });
    }

    return (
        <StyledMenu open={open} aria-label="Page navigation menu"
            className="pal--side-nav pal--world-level-nav left-nav-wrapper col-sm-3 col-md-2 col-sm-pull-9 col-md-pull-10 sidebar-pf sidebar-pf-left"
            id="security-compliance-ui--left-nav">

            <h2 className="pal--side-nav__item pal--side-nav__header">
                <a href="http://localhost:4000/security-compliance/"
                    className="pal--side-nav__link">Compliance Authority
                </a>
            </h2>

            <ul className="pal--side-nav__items">

                <li className="pal--side-nav__item pal--side-nav__item--active">
                    <a href="http://localhost:4000/security-compliance/dashboard"
                        className="pal--side-nav__link" id="left-nav-dashboard">
                        Dashboard
                    </a>
                </li>

                <li className="pal--side-nav__item left-nav__title">
                    <a href="http://localhost:4000/security-compliance/" className="pal--side-nav__link"
                        id="left-nav-automate-compliance" disabled="">Automate Security and Compliance
                    </a>
                </li>

                <li className="pal--side-nav__item pal--side-nav__item--with-menu" onClick={() => handleListClick("assess")}>
                    <button aria-haspopup="true"
                        aria-expanded={`${listName["assess"]}`} type="button" className="pal--side-nav__menu-button"
                        id="left-nav-automate-compliance-validate">Assess
                        <svg focusable="false"
                            preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="pal--side-nav__menu-icon">
                            <path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path>
                        </svg>
                    </button>

                    <DropDownMenu className={`${listName["assess"] ? 'dropdown__list--active' : ''}`}>
                        {
                            assessItems.map((item) => {
                                return (
                                    <li className="pal--side-nav__item">
                                        <a href={item.href} key={item.id} className="pal--side-nav__link" id={item.id}>{item.name}</a>
                                    </li>
                                )
                            })
                        }
                    </DropDownMenu>
                </li>

                <li className="pal--side-nav__item pal--side-nav__item--with-menu" onClick={() => handleListClick("configure")}>
                    <button aria-haspopup="true"
                        aria-expanded={`${listName["configure"]}`} type="button" className="pal--side-nav__menu-button"
                        id="left-nav-automate-compliance-configure">Configure
                        <svg focusable="false"
                            preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                            width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="pal--side-nav__menu-icon">
                            <path d="M8 11L3 6 3.7 5.3 8 9.6 12.3 5.3 13 6z"></path>
                        </svg>
                    </button>

                    <DropDownMenu className={`${listName["configure"] ? 'dropdown__list--active' : ''}`}>
                        {
                            configureItems.map((item) => {
                                return (
                                    <li className="pal--side-nav__item">
                                        <a href={item.href} key={item.id} className="pal--side-nav__link" id={item.id}>{item.name}</a>
                                    </li>
                                )
                            })
                        }
                    </DropDownMenu>
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
        <StyledBurger open={open} onClick={() => setOpen(!open)} className="bx--left-nav__trigger bx--left-nav__trigger--active" data-left-nav-toggle="open" aria-haspopup="true" aria-label="Close Global Navigation" aria-expanded="true" data-aria-open="Close Global Navigation" data-aria-closed="Expand Global Navigation">

            <svg className={`btn-${!open ? 'active' : "inactive"}`} focusable="false" preserveAspectRatio="xMidYMid meet" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M2 14.8H18V16H2zM2 11.2H18V12.399999999999999H2zM2 7.6H18V8.799999999999999H2zM2 4H18V5.2H2z">
                </path>
            </svg>

            <svg className={`btn-${open ? 'active' : "inactive"}`} focusable="false" preserveAspectRatio="xMidYMid meet" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true">
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