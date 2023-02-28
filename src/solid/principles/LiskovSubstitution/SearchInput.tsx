interface ISearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function SearchInput(props: ISearchInputProps) {
  const { value, onChange, ...restProps } = props

  return (
    <div>
      <div style={{ display: 'flex', border: '2px solid black', width: 250 }}>
        <div>
          <svg
            aria-hidden="true"
            style={{ height: 20 }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          placeholder="Search for the right one..."
          required
          value={value}
          onChange={onChange}
          {...restProps} // accept all props related to input
        />
      </div>
    </div>
  )
}
