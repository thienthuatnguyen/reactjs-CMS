import { Button, FormControl, MenuItem, Select } from "@material-ui/core";
import "./SearchBox.scss";

export function SearchBox() {
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log('change')
  }
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className="wrapper-search-box">
      <div className="search-box">
        <form className="search-form" onSubmit={onSubmit}>
          <div className="wrapper-input">
            <FormControl className={'my-wrapper-select'}>
              <Select
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                  },
                  getContentAnchorEl: null
                }}
                value={""}
                onChange={handleChange}
                displayEmpty
                className={'my-select'}
              >
                <MenuItem value="" disabled>
                  Chọn khoa...
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <input type="text" className="search-input" id="search-input"
              placeholder="Nhập tên Bác sĩ, Y tá..." />
          </div>
          <Button variant="contained" color="primary" type="submit" className="my-btn btn-green btn-contained btn-search">
            Tìm Kiếm
          </Button>
        </form>
      </div>
    </div>
  )
}
