import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material'
/**
 * Checkbox for UI
 */

type CheckboxProps = {

} & MuiCheckboxProps

export const Checkbox = ({
  ...props
}: CheckboxProps) => {
  return (
    <MuiCheckbox disableRipple {...props} />
  )
}
