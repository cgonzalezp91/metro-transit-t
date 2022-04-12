import { render , screen } from "@testing-library/react"
import SearchByButton from "../SearchByButton"

test('Renders both buttons correctly', () => {
    const handleClick = () => {}
    render(<SearchByButton onClick={handleClick}/>)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(2)
})

