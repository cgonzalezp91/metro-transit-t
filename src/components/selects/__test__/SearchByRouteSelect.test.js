import { render , screen } from "@testing-library/react"
import SearchByRouteSelect from "../SearchByRouteSelect.jsx"

test('Renders select correctly', () => {
    render(<SearchByRouteSelect id="test-select" isActive={true}/>)
    const select = screen.getByTestId('search-by-select')
    expect(select).toBeInTheDocument()
})

