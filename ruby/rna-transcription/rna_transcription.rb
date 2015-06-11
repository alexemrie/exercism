class Complement
  def self.of_dna(str)
    if str.include?('U')
      raise ArgumentError
    else
      str.tr("CGTA", "GCAU")
    end
  end
  def self.of_rna(str)
    if str.include?('T')
      raise ArgumentError
    else
      str.tr("GCAU", "CGTA")
    end
  end
end
