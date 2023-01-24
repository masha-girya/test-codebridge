/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React from 'react';
import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
  query: string,
  setQuery: (value: string) => void,
  applyQuery: (...args: string[]) => void,
}

export const QueryForm: React.FC<Props> = React.memo(({
  query,
  setQuery,
  applyQuery,
}) => {
  const theme = useTheme();

  return (
    <FormControl 
      fullWidth 
      sx={{
        'max-width': 600,
        height: 80,
        fontFamily: theme.typography.fontFamily
      }}>
      <InputLabel
        htmlFor="outlined-basic"
        size="normal"
        sx={{
          position: 'relative',
          fontFamily: theme.typography.fontFamily,
          fontWeight: 600,
          fontSize: 18,
          left: -12,
        }}
      >
        Filter by keywords
      </InputLabel>
      <OutlinedInput
        type="search"
        id="outlined-basic"
        className="input"
        startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
        placeholder="The most successful IT companies in 2020"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
          applyQuery(event.target.value);
        }}
      />
    </FormControl>
  );
});
