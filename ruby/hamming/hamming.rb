class Hamming
  def self.compute(dna_strand_a, dna_strand_b)
    array1 = dna_strand_a.split("").each_with_index.map {|x, i| x.ord * (i + 1)}
    array2 = dna_strand_b.split("").each_with_index.map {|x, i| x.ord * (i + 1)}
    (array1 - array2).length
  end
end
