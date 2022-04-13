import { render , screen } from "@testing-library/react"
import SearchByStopInput from "../SearchByStopInput.jsx"

test('Renders input correctly', () => {
    render(<SearchByStopInput id="test-input" isActive={false}/>)
    const input = screen.getByTestId('search-by-input')
    expect(input).toBeInTheDocument()
})

