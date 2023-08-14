import { Box, TextField, TextFieldProps } from '@mui/material'
/**
 * Input component for UI
 */

type InputProps = {

} & TextFieldProps

export const Input = ({
  error,
  helperText,
  ...props
}: InputProps) => {
  const colorRed = `#E30404`

  const errorIcon = <svg xmlns="http://www.w3.org/2000/svg" width="15.5" height="15.5" viewBox="0 0 15.5 15.5">
    <g id="error" transform="translate(0.75 1.25)"> 
      <circle id="Ellipse_62" data-name="Ellipse 62" cx="7" cy="7" r="7" transform="translate(0 -0.5)" fill="none" stroke={colorRed} stroke-miterlimit="10" stroke-width="1.5"/> 
      <line id="Line_71" data-name="Line 71" transform="translate(7 3)" fill="none" stroke={colorRed} stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"/> 
      <line id="Line_70" data-name="Line 70" y1="6" transform="translate(7 4.5)" fill="none" stroke={colorRed} stroke-miterlimit="10" stroke-width="1.5"/>
    </g> 
  </svg> 

  let helperTextCopy = helperText

  if (error) {
    helperTextCopy = <Box sx={{
      display: `grid`,
      gap: .5,
      gridTemplateColumns: `min-content 1fr`,
      alignItems: `center`,
    }}>
      {errorIcon}
      <span>{helperText}</span>
    </Box>
  }

  return (
    <TextField helperText={helperTextCopy} error={error} {...props}/>
  )
}
