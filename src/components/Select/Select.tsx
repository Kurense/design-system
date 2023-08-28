import { Select as MuiSelect, SelectProps as MuiSelectProps } from "@mui/material"
/**
 * A Select component
 */

type SelectProps = {

} & MuiSelectProps

export const Select = ({
  ...props
}: SelectProps) => {
  return (
    <MuiSelect
      sx={{
        maxWidth: '350px',
        width: '100%',
      }}
      {...props}
    ></MuiSelect>
  )
}
