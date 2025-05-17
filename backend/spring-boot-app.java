@RestController
@RequestMapping("/api/data")
@CrossOrigin(origins = "*") // for local dev
public class DataController {

    @Autowired
    private DataRepository repo;

    @PostMapping
    public Data saveData(@RequestBody Data data) {
        return repo.save(data);
    }

    @GetMapping
    public List<Data> getAllData() {
        return repo.findAll();
    }
}
