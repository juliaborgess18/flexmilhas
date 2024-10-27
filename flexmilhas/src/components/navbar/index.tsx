export function Navbar() {
  return (
    <header className="lg:px-16 px-4 bg-violet-700 text-white flex items-center py-4 shadow-md">
      <div className="flex-1 flex justify-between items-center">
        <a href="#" className="text-xl">FlexMilhas</a>
        
        <input className="hidden" type="checkbox" id="menu-toggle" />
        
        <nav className="flex items-center space-x-4">
          <ul className="hidden md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
            <li>
              <a className="md:p-4 py-3 px-0 block" href="/usuario/acessar-conta">
                Fazer login
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="md:hidden">
        <a className="py-3 px-4 block" href="/usuario/acessar-conta">
          Fazer login
        </a>
      </div>
    </header>
  );
}
